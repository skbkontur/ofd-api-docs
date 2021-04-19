authenticate-by-cert
====================

Метод используется для получения зашифрованного на сертификат пользователя токена, необходимого для проверки доступа к закрытому ключу.

В теле запроса (*Body*) необходимо передать сертификат электронной подписи (в кодировке Base-64, подробнее в разделе :doc:`../CertificateConvertation`), использованный для :doc:`../GetAccess`.

Запрос:

::

  POST /auth/authenticate-by-cert?free=false HTTP/1.1
  Host: api.kontur.ru
  Cache-Control: no-cache

  \-----BEGIN CERTIFICATE-----
  MIIJtTCCCWSgAwIBAgIRAPNJ4HrEDMeA5xFQIzonz4UwCAYGKoUDAgIDMIIBezEe
  MBwGCSqGSIb3DQEJARYPY2FAc2tia29udHVyLnJ1MRgwFgYFKoUDZAESDTEwMjY2
  \......
  MDAwMDAxMjEaMBgGCCqFAwOBAwEBEgw2NjI5NDE2NTg3NjAxIDAeBgkqhkiG9w0B
  \-----END CERTIFICATE-----

Если запрос будет выполнен успешно, вернется ответ со статусом 200. В ответе будет содержаться JSON-объект с полем `EncryptedKey` - строкой, зашифрованной на сертификат пользователя:

::

  HTTP/1.1 200 OK
  Content-Type: application/json;charset=UTF-8
  Content-Length: xxxx Server: xxxx
  {
    "EncryptedKey": "", //String, ключ: строка, зашифрованная на сертификат интегратора в кодировке Base-64
    "Link": {
        "Rel": "",      //String, комментарий
        "Href": ""      //String, ссылка, которую необходимо использовать на следующем шаге
    }
  }

.. note::

  Полученный от сервера ключ шифруется по алгоритму ГОСТ 28147-89.


Пример ответа:

::

  {
    "EncryptedKey": "MIIDsQYJKoZIhvcNAQcDoIIDoj……………M3UkvLVglQZdWlmdA==",
    "Link": {
        "Rel": "Send decrypted key to this link",
        "Href": "https://api.kontur.ru/auth/v5.9/approve-cert?thumbprint=F757JY230G5G5755B5664ЗC870371V1G871012AA"
    }
  }


Возможные ответы, их коды и описание:

::

  {
     "HTTP response":
     {
      "200 OK",                 //Запрос выполнен успешно
      "400 Bad Request",        //Отсутствуют необходимые параметры
      "403 Forbidden",          //Описание содержится в теле ответа
      "406 Not Acceptable",     //Один из сертификатов цепочки имеет неверную подпись. Истек либо не наступил срок действия сертификата. Цепочка сертификатов основана на не доверенном корневом сертификате
      "500 InternalServerError" //Внутренняя ошибка сервера
     }
  }
