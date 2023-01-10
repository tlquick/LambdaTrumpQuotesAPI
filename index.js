const axios = require('axios');
exports.handler = async function (event, context) {
    try {
    const response = await axios.get("https://trumpquoteapi.onrender.com/random", { headers: { Accept: "application/json" } });
    const data = response.data;
    console.log("MY DATA returned a topic of  " + data.topic);
    return {
      statusCode: 200,
      body: JSON.stringify({ topic: data.topic, year: data.year,  quote: data.quote})
    };
  } catch (err) {
    console.log(err); // output to  function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    };
  }
};