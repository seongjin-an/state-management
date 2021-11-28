import {rest} from 'msw'
export const handlers = [
    rest.get('/username', async (req, res, ctx) => {
        const id = req.url.searchParams.get('id')
        return res(
            ctx.json({
                name: id === '1' ? 'the one' : 'the others'
            })
        )
        // return res(ctx.status(400))
    }),
    rest.get('/login', async (req, res, ctx) => {
        return res(
            ctx.json({
                id: 'imsi-id',
                firstName: 'John',
                lastName: 'Maverick'
            })
        )
    }),
    // rest.get('https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json', async (req, res, ctx) => {
    //     return res(
    //         ctx.json({
    //             "data": {
    //                 "people" : [
    //                     {
    //                         "name": "ansj",
    //                         "age": 135
    //                     },
    //                     {
    //                         "name": "timmy",
    //                         "age": 13
    //                     },
    //                     {
    //                         "name": "cindy",
    //                         "age": 15
    //                     },
    //                     {
    //                         "name": "judy",
    //                         "age": 25
    //                     },
    //                     {
    //                         "name": "marry",
    //                         "age": 64
    //                     },
    //                     {
    //                         "name": "tommy",
    //                         "age": 109
    //                     }
    //                 ]
    //             }
    //         })
    //     )
    // }),
    // rest.get('https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json', async (req, res, ctx) => {
    //     const id = req.url.searchParams.get('id')
    //
    //     const originalResponse = await ctx.fetch(req)
    //     const originalResponseData = await originalResponse.json()
    //
    //     return res(
    //         ctx.json({
    //             "data": {
    //                 "people" : [
    //                     ...originalResponseData.data.people,
    //                     {
    //                         "name": id,
    //                         "age": 135
    //                     }
    //                 ]
    //             }
    //         })
    //     )
    // })
    rest.get('https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json', async (req, res, ctx) => {
        const id = req.url.searchParams.get('id')

        const originalResponse = await ctx.fetch(req)
        const originalResponseData = await originalResponse.json()

        return res(
            ctx.status(403),
            // And a response body, if necessary
            ctx.json({
                errorMessage: 'data not found'
            })
            // ctx.json({
            //     "data": {
            //         "people" : [
            //             ...originalResponseData.data.people,
            //             {
            //                 "name": id,
            //                 "age": 135
            //             }
            //         ]
            //     }
            // })
        )
    }),
    rest.put('http://localhost:3000/counter/increment', async (req: {body:{value: number}}, res, ctx) => {
        const { value } = req.body
        return res(
            ctx.json({
                value: value + 2
            })
        )
    }),
    rest.get('http://localhost:3000/todo', async (req, res, ctx) => {
        return res(
            ctx.json({
                todo: {
                    task: 'todo from server'
                }
            })
        )
    })
]