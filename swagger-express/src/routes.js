const express = require('express');

const router = express.Router();


/**
 * @swagger
 * tags:
 *   name: Lost
 *   description: Lost series
 */

/**
 * @swagger
 * /losties:
 *  get:
 *    tags: [Lost]
 *    description: Lost main characters
 *    responses:
 *      200:
 *        description: A list for Jacob.
 */
router.get('/losties', (req, res) => {
  res.json({
    'users': ['Locke', 'Jack', 'Sawyer']
  });
});


/**
 * @swagger
 * /tailies:
 *  get:
 *    tags: [Lost]
 *    description: Another Lost characters
 *    responses:
 *      200:
 *        description: An ignored list for Jacob.
 */
router.get('/tailies', (req, res) => {
  res.json({
    'users': ['Ana Lucia', 'Mister Eko', 'Bernard']
  });
});


module.exports = router;
