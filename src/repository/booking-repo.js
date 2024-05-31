const { ValidationError, AppError } = require("../utils/errors/index");
const { Booking } = require("../models/index");
const { StatusCodes } = require("http-status-codes");

class BookingRepo {
  async create(data) {
    try {
      const booking = await Booking.create(data);
      return booking;
    } catch (error) {
      if (error.name == "SequelizeValidationError") {
        throw new ValidationError(error);
      }
      throw new AppError(
        "RepoError",
        "cannot create booking",
        "there was some issue",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  async Update(data){
    
  }
}

module.exports = BookingRepo;
