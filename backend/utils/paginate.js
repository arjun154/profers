const paginate = (req, res) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const startIndex = (page - 1) * limit;

    const result = { limit, page };

    result.totalResults = await model.countDocuments().exec();
    result.totalPages = Math.ceil(result.totalResults / limit);

    try {
      result.results = await model.find().limit(limit).skip(startIndex);
      res.paginatedResult = result;
      next();
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
};

module.exports = paginate;
