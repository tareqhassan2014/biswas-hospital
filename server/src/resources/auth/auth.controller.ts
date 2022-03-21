import { NextFunction, Request, Response } from 'express';
import jwt from '../../library/jwt';
import responseGenerator from '../../utility/responseGenerator';
import UserModel from './auth.model';

export const signUp = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const email = req.body.email;
        const OLdUser = await UserModel.findOne({ email });
        if (OLdUser) {
            const token = jwt.issueJWT(OLdUser);

            return res.json(
                responseGenerator(
                    {
                        name: OLdUser.name,
                        email: OLdUser.email,
                        id: OLdUser._id,
                        img: OLdUser.img,
                        role: OLdUser.role,
                        status: OLdUser.status,
                        phone: OLdUser.phone,
                    },
                    'Login successful!',
                    false,
                    token
                )
            );
        }

        const user = await UserModel.create(req.body);
        const token = jwt.issueJWT(user);

        return res.json(
            responseGenerator(
                {
                    name: user.name,
                    email: user.email,
                    id: user._id,
                    img: user.img,
                    role: user.role,
                    status: user.status,
                    phone: user.phone,
                },
                'Login successful!',
                false,
                token
            )
        );
    } catch (err: any) {
        return res
            .status(500)
            .json(responseGenerator('fail', err.message, true));
    }
};

export const login = async (req: Request, res: Response) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log(email);
    try {
        const user = await UserModel.findOne({ email });

        if (!user) {
            return res
                .status(500)
                .json(
                    responseGenerator('fail', 'no user with this email', true)
                );
        }

        const token = jwt.issueJWT(user);
        return res.json(
            responseGenerator(
                {
                    name: user.name,
                    email: user.email,
                    id: user._id,
                    img: user.img,
                    role: user.role,
                    status: user.status,
                    phone: user.phone,
                },
                'Login successful!',
                false,
                token
            )
        );
    } catch (err: any) {
        return res
            .status(500)
            .json(responseGenerator('fail', err.message, true));
    }
};
