/**
 * @openapi
 * /user:
 *   post:
 *     summary: 회원가입
 *     tags: [Board]
 *     requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties: 
 *                              name:
 *                                  type: string
 *                                  example: 유한결
 *                              email:
 *                                  type: string
 *                                  example: support@gyeoriii.shop
 *                              personal:
 *                                  type: string
 *                                  example: 030201-1234567
 *                              prefer:
 *                                  type: string
 *                                  example: http://naver.com
 *                              pwd:
 *                                  type: string
 *                                  example: wlzh1234
 *                              phone:
 *                                  type: string
 *                                  example: '01011111111'
 *     responses:
 *          200:
 *              description: 생성된 user의 _id
 *              content:
 *                  application/json:
 *                       schema:
 *                          type: string
 *                          example: '61ee53366a92c63829be4269'                                                      
 */

/**
 * @openapi
 * /users:
 *   get:
 *     summary: 회원목록 조회
 *     tags: [Board]
 *     responses:
 *          200:
 *              description: 성공
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties: 
 *                              name:
 *                                  type: string
 *                                  example: 유한결
 *                              email:
 *                                  type: string
 *                                  example: support@gyeoriii.shop
 *                              personal:
 *                                  type: string
 *                                  example: 030201-1234567
 *                              phone:
 *                                  type: string
 *                                  example: http://naver.com
 *                              prefer:
 *                                  type: string
 *                                  example: wlzh1234
 *                                
 */