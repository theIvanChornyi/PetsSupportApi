const axios = require('axios');
const { GEO_NAMES_USER } = require('../../helpers/config');

const getLocation = async (req, res, next) => {
  const { city } = req.query;
  if (!city) {
    res.status(400).json({ message: 'city is required field' });
  }
  const normalizeRequest = city.trim();
  if (!normalizeRequest) {
    res.status(400).json({ message: 'Type only valid city name' });
  }

  if (normalizeRequest) {
    const { data } = await axios({
      method: 'get',
      baseURL: 'http://api.geonames.org/search',
      params: {
        username: GEO_NAMES_USER,
        name_startsWith: normalizeRequest,
        type: 'JSON',
        cities: 'cities500',
        country: 'UA',
        maxRows: 20,
        style: 'MEDIUM',
      },
    });
    const responsData = data.geonames.map(({ name, adminName1 }) => ({
      name,
      regionArea: adminName1,
    }));

    res.status(200).json({
      count: data.totalResultsCount,
      cities: responsData,
    });
  }
};

module.exports = getLocation;
