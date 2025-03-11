//const Job = require('../modules/workmodel.js');
const fs = require('fs');

const jobs = JSON.parse(
    fs.readFileSync(`${__dirname}/../data/work.json`, 'utf-8')
);

exports.checkID = (req, res, next, value)=>{ // checks if the added id is valid
    if(req.params.id>jobs.length){
        return res.status(404).json({
            status: "failed",
            message: "invalid ID"
        })
    }
    next(); // if an incorrect ID is written, but then a correct one is written after it, this will allow it to do so, without this it will just keep loading and never ending.
}

/*exports.checkBody = (req, res, next)=>{ // checks if the user wrote all the needed body requirments
    if(!req.body.name || !req.body.address || !req.body.ranking || !res.body.room_price){
        return res.status(400).json({ // 400 means "bad request"
            status: "failed",
            messgage: "Missing name or address, or ranking or room price"
        })
    }
    next();
}*/

exports.getAllJobs = (req, res)=>{ // get all the hotels in the work.json;
        res.status(200).json({
            status: "success",
            jobs
        })
}

exports.getJob = (req,res)=>{

        const worker = jobs.find(el => el.id == req.params.id);
        res.status(200).json({
            status: "success",
            data:{
                worker
            }
        })
}

exports.getSalary = (req, res)=>{
    const worker = jobs.find(el => el.darbuotojo_vardas == req.params.darbuotojo_vardas);
    const name = worker.darbuotojo_vardas;
    const hourlyPay = 60; // cia kiek gauna visi per 1 valanda
    const salary = worker.darbo_val*hourlyPay;

        res.status(200).json({
            status: "success",
            data:{
                name,
                salary
            }
        })
}

exports.createJob = (req, res)=>{
        const newID = jobs[jobs.length-1].id+1;
        const newJob = Object.assign({id: newID}, req.body);

        jobs.push(newJob);
        fs.writeFile(
            `${__dirname}/../data/work.json`,
            JSON.stringify(jobs),
            ()=>{
                res.status(201).json({
                    status: "success",
                    data:{
                        newJob
                    }
                })
            }
        )
}
