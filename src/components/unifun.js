import axios from 'axios';
async function insertrequest(data)
{
    await axios.post('http://localhost:5555/create/request',data).then((res)=>{alert(res.data)})
}

async function insertdonor(data)
{
    await axios.post('http://localhost:5555/create/donor',data).then((res)=>{alert(res.data)})
}

async function insertreceiver(data)
{
    await axios.post('http://localhost:5555/create/receiver',data).then((res)=>{alert(res.data)})
}

async function insertuser(data)
{
    await axios.post('http://localhost:5555/create/signup',data).then((res)=>{alert(res.data)})
}

async function getdonor()
{
    await axios.get('http://localhost:5555/view/donor').then((res)=>{console.log(res.data)})
}

async function verifyuser(mail)
{
    await axios.get(`http://localhost:5555/view/user?mail=${mail}`).then((res)=>{console.log(res)})
    
}

export{insertrequest,insertdonor,insertreceiver,insertuser,getdonor,verifyuser}
