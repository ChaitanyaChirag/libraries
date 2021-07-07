
import _ from "lodash"

export default function Lodash() {
    const greeting = _.join(["Number" ,"of", "users", "in" ,"the", "city", "of", "America"] ," " );
    
    return <h1>{greeting}</h1>;}