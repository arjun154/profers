const queryParser = async (req, res, next) => {
  let {
    page = 1,
    query = "",
    sortBy = "_id",
    sortOrder = "",
    limit = 20,
  } = req.query;
  page = Number(page);
  limit = Number(limit);
  sortOrder = { asc: 1, desc: -1 }[sortOrder] || 0;

  const queryObject = { page, query, sortBy, sortOrder, limit };
  req.queryObject = queryObject;
  next();
};

module.exports = queryParser;
