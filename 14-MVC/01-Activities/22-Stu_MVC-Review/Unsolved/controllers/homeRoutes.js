const router = require('express').Router();

router.get('/', async (req, res) => {
  // TODO: Render template with Sequelize data
  try {
    const dbuserData = await User.findAll({
      attributes: {exclude: ['password']},
      order:[['name','ASC']]
    });

    const users = dbuserData.map((user) =>
      user.get({ plain: true })
    );

    res.render('homepage', { users });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
