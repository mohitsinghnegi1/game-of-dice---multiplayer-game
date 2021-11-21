exports.notFound = function notFound(req, res, next) {
  res.status(404).send('You seem lost. ');
};

exports.error = function error(err, req, res, next) {
  console.log(err);

  if (typeof (err) === 'string') {
    return res.status(400).json({message: err});
  }


  res.status(500).send('Logout to proceed');
};