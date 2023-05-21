import axios from 'axios';

async function insertdonor(data)
{
    await axios.post('http://localhost:5555/create/donor',data).then((res)=>{alert(res.data)});
}

async function insertreceiver(data)
{
    await axios.post('http://localhost:5555/create/receiver',data).then((res)=>{alert(res.data)});
}

async function getdonor(data)
{
    await axios.get(`http://localhost:5555/view/donor?status=pending`).then((res)=>{console.log(res.data)});
}

export{insertdonor,insertreceiver,getdonor}
