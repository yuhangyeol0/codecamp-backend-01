/**
 * @openapi
 * /tokens/phone:
 *   post:
 *       summary: 인증번호 보내기
 *       tags: [Token]
 *       requestBody:
 *                required: true
 *                content:
 *                   application/json:
 *                       schema:
 *                           type: object
 *                           properties:
 *                               myphone: 
 *                                    type: string
 *                                    example: '01040365685'
 *       responses:
 *        200:
 *            description: 인증번호를 전송하였습니다.
 *            content:
 *               application/json:
 *                   schema:
 *                      type: string
 *                      example: 인증완료 되었습니다
 *                 
 * 
 */
 
/** 
 * @openapi
 * /tokens/phone:
 *   patch:
 *       summary: 인증번호 인증
 *       tags: [Token]
 *       requestBody:
 *                required: true
 *                content:
 *                   application/json:
 *                           schema:
 *                               type: object
 *                               properties:
 *                                   phone: 
 *                                      type: string
 *                                      example: '01040365685'
 *                                   token:
 *                                      type: string
 *                                      example: 121123 
 *       responses:
 *             200:
 *                     description: 인증완료
 *                     content:
 *                        appilcation/json:
 *                           schema:
 *                              type: string
 *                              example: 인증완료 되었습니다
 *                              
 * 
 * 
 *                  
 */