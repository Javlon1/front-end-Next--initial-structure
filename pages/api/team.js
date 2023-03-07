export const Team = [
    {
        id:1,
        name:'javlon'
    }
]
export default function handler(req, res) {
    res.status(200).json(Team)
}