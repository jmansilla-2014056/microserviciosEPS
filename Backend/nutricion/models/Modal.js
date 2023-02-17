const conexion = require("./db");


async function OtherTest(
    id_user,
    name,
    last_name,
    password,
    email,
    phone,
    photo,
    gender,
    birth_date,
    address,
    id_status,
    verify,
    membership,
    id_Country,
    type
){
    try {
        let query = `call UpdateUser`+
            `('${id_user}','${name}','${last_name}', '${password}','${email}', '${phone}','${photo}', '${gender}', '${birth_date}','${address}','${id_status}','${verify}', '${membership}', '${id_Country}', '${type}');`;
        return await conexion.ejecutarInsercion(query);
    }catch(error){
        return false;
    }
}

module.exports.OtherTest = OtherTest;
