import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function cancelOrders(req: Request, res: Response) {
    try{

        const { orderId } = req.params;

        await Order.findByIdAndDelete(orderId);

        res.sendStatus(204);
    } catch {
        res.sendStatus(500);
    }
}
