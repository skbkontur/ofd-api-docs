authenticate-by-pass
====================

Метод используется для получения идентификатора пользовательской сессии, используя логин и пароль пользователя.

В параметрe запроса `login` необходимо передать логин (электронную почту), используемую для аутентификации. В теле запроса (*Body*) передается пользовательский пароль в виде строки в кодировке UTF-8.

Пример запроса:

::

  POST /auth/authenticate-by-pass?login=testlogin@testDomain.net HTTP/1.1
  Host: api.kontur.ru
  Body: myPassword
  Cache-Control: no-cache

Если запрос будет выполнен успешно, вернется ответ со статусом 200. В ответе будет содержаться JSON-объект с полем `Sid` - session ID созданной сессии.

Пример ответа:

::

  HTTP/1.1 200 OK
  Content-Type: application/json;charset=UTF-8
  Content-Length: xxxx
  Server: xxxx
  {
    "Sid": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
  }


Возможные ответы, их коды и описание:

::

  {
     "HTTP response":
     {
      "200 OK",                 //Запрос выполнен успешно
      "400 Bad Request",        //Отсутствуют необходимые параметры
      "403 Forbidden",          //Описание содержится в теле ответа
      "500 InternalServerError" //Внутренняя ошибка сервера
     }
  }
