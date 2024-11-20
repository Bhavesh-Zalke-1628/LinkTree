import clientPromise from '@/lib/mongodb'

export async function POST(req) {
    const body = await req.json()

    const client = await clientPromise;
    const db = client.db("bitTree")
    const collection = db.collection("links")


    // if the handle is already claimed you can not create a new bitree collection

    const doc = await collection.findOne({ handle: body.handle })

    if (doc) {
        return Response.json({
            success: false,
            error: true,
            msg: "This bitree already exists ? choose different handle",
            data: null
        })
    }

    // If the handle is already claimed, you cannot create the bittree
    const result = await collection.insertOne(body)

    console.log(body)
    return Response.json({
        success: true,
        error: false,
        msg: "Added",
        data: body
    })
}