import { Request, Response, Router } from "express";

export interface IControllerRoute { 
	path: string;
	func: (req: Request, res: Response) => void;
	method: keyof Pick<Router, 'get' | 'post' | 'delete' | 'patch' | 'put'>;
	// method: 'get' | 'post' | 'delete' | 'patch' | 'put';
 }