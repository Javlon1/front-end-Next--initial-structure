export const Info = [
    {
        id:1,
        tel:998905251243,
    }
]
export default function handler(req, res) {
    res.status(200).json(Info)
}