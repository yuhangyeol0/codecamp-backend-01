/**
 * @openapi
 * /users:
 *   get:
 *     summary: 회원목록 조회
 *     tags: [Board]
 *     parameters:
 *          - in: query
 *            name : number
 *            type : int
 *     responses:
 *          200:
 *              description: 성공
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties: 
 *                              email:
 *                                  type: int
 *                                  example: 111@ggg.com
 *                              name:
 *                                  type: string
 *                                  example: 한결
 *                              phone:
 *                                  type: string
 *                                  example: 1111111111
 *                              personal:
 *                                  type: string
 *                                  example: 111111-111111
 */