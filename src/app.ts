import express, { Express } from 'express'
import { userRouter } from './users/users'
import { Server } from 'http'
import { LoggerService } from './logger/logger.service'

export class App {
	app: Express
	server: Server
	port: number
	time: string
	logger: LoggerService

	constructor(logger: LoggerService) { 
		this.app = express()
		this.port = 3000
		this.time = new Date().toLocaleString()
		this.logger = logger
	}

	useRoutes() { 
		this.app.use('/users', userRouter)
	}

	public async init() { 
		this.useRoutes()
		this.server = this.app.listen(this.port)
		this.logger.log(`Server started on http://localhost:${this.port}`)
	}
}
