exports.get_landing = (req, res, next) => {
    res.render('landing', {title: 'Express 2'})
}

exports.submit_lead = (req, res, next) => {
    console.log("lead email", req.body.lead_email)
    res.redirect('/')
}