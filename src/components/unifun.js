import axios from 'axios';
async function insertrequest(data)
{
    await axios.post('http://localhost:5555/create/request',data).then((res)=>{alert(res.data)});
}

async function insertdonor(data)
{
    await axios.post('http://localhost:5555/create/donor',data).then((res)=>{alert(res.data)});
}

async function insertreceiver(data)
{
    await axios.post('http://localhost:5555/create/receiver',data).then((res)=>{alert(res.data)});
}

async function getdonor()
{
    await axios.get('http://localhost:5555/view/donor').then((res)=>{console.log(res.data)});
}

export{insertrequest,insertdonor,insertreceiver,getdonor}
