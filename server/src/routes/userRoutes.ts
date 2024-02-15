import {Request, Response, Router} from 'express';
import prisma from '../services/prisma';
import {ValidatorService} from '../validators/validator-service';

const router = Router();
const validatorService = new ValidatorService();

router.post('/users/create', async (req: Request, res: Response) => {
    const {isValid, errors} = validatorService.validateUser(req.body);

    if (isValid) {
        try {
            const userExists = await prisma.user.findUnique({where: {email: req.body.email}});

            if (userExists) {
                return res.status(403).send({success: false, errors: {email: ['The email already exists ']}});
            }

            await prisma.user.create({data: req.body});

            return res.send({success: true});
        } catch (e) {
            return res.status(403).send({success: false})
        }
    }

    res.status(403).json({success: false, errors});
});

router.get('/users', async (req: Request, res: Response) => {
    const currentPage = req.query.page as unknown as number;
    const limit = 6;
    const step= (currentPage * limit) - limit;

    try {
        const users= await prisma.user.findMany({
            skip: step,
            take: limit
        });

        res.send(users);
    } catch (e) {
        res.send(403).send({ success: false });
    }
});

router.get('/users/count', async (req: Request, res: Response)=> {
    try {
        const usersCount = await prisma.user.count();
        const limit = 6;
        const numOfPages = Math.ceil(usersCount / limit);
        res.send({numOfPages})
    } catch (e) {
        res.status(403).send({ success: false })
    }
});

export default router;