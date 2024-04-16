'use client'

import { http, HttpResponse } from 'msw'
import { BASE_URL } from './service'
import { setupWorker } from 'msw'

export const setupApiMockServer = () => {
    const handlers = [
        http.get(`${BASE_URL}/results`, () => {
            return HttpResponse.json({
                id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
                firstName: 'John',
                lastName: 'Mavasferick',
            })
        }),
    ]
    const worker = setupWorker(...handlers)
    worker.start()
    console.log("asdfn")
    return worker
}