
import GeneralError from '../utills/errorCodes.js';

const handleError = (
    err,
    _req,
    res,
    _next,
) => {
  if (err instanceof GeneralError) {
    return res.status(err.getErrorCode()).json({
      status: 'Error',
      message: err.message,
    });
  }

  return res.status(500).json({
    status: 'Error',
    message: err.message,
  });
};

export default handleError;