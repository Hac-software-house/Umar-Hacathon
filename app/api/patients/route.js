import { NextResponse } from "next/server"
import { patientModel} from '../../../model/patients'
import dbConnect from "../../../config/db"

dbConnect()

export const GET =async (req, route) => {
    try {
           //  const data = await userModel.create()
            //  const data = await userModel.createMany()
     const data = await patientModel.find()
     console.log("data",data)
     return NextResponse.json({ message: "success",users:data })

    } catch (error) {
     console.log("error",error);
     return NextResponse.json({ message: "error",error })
    }}

export const POST = async (req) => {
    try {
        const body = await req.json()
        console.log("body", body)

            // database
           
            return NextResponse.json({ message: "successfully product created" })
        

       
    } catch (error) {
        return NextResponse.json({
            message: "something went wrong",
            error: JSON.stringify(error)
        })
    }
}