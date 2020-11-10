const addAddress = async (req, res) => {
  const { user } = req;

  try {
    const data = await user.updateOne({ $push: { addresses: req.body } });
    res.json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllAddresses = async (req, res) => {
  const { user } = req;

  try {
    res.json(user.addresses);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { addAddress, getAllAddresses };
