Коды и статусы ответов
======================

При положительном результате обработки запроса возвращается HTTP-код ответа 200 ОК. В теле ответа содержатся данные, соответствующие запросу. В случае отсутствия данных в указанном периоде или с указанными параметрами возвращается пустое тело ответа.

При возникновении внутренней ошибки сервера во время обработки запроса возвращается ошибка 500 Internal Server Error.

При появлении иных ошибок в процессе обработки запроса могут быть возвращены коды ошибки 400, 401, 403. В этих случаях в теле ответа возвращается следующая структура:

::

  {
    "errorCodeId": "",    // сообщение, конкретизирующее обнаруженную ошибку
    "errorCode": "",      // код, конкретизирующий обнаруженную ошибку, это поле устарело, временно поддерживается
    "moreInfo": "",       // ссылка на подробную документацию API
    "userMessage": {      // поясняющий текст на русском и английском языках
                "ru": "",
                "en": "",
    }
  }


.. note::

    Поле errorCode устарело, временно поддерживается, используйте errorCodeId.


Возможные ответы, и соответствующие им errorCode
------------------------------------------------

::

  "HTTP response":
    {
      "400 Bad Request":
        {
          "errorCode": 400000,
          "errorCodeId": urn:error:request:invalid    // Некорректно указано значение параметра в запросе
        },
        {
          "errorCode": 400002,
          "errorCodeId": urn:error:request-parameter:period:invalid   // Неверный временной интервал: дата начала периода больше даты конца, либо даты заданы неверным форматом
        },
        {
          "errorCode": 400007,
          "errorCodeId": urn:error:request-parameter:{имя параметра}:required   // Запрос должен содержать обязательный параметр
        },
        {
          "errorCode": 400008,
          "errorCodeId":urn:error:request-parameter:date:invalid    // Переданная дата не соответствует формату
        },
      "401 Unauthorized":
        {
          "errorCode": 401002,
          "errorCodeId":urn:error:request-parameter:auth-sid:required:access-denied   // Не указан идентификатор пользовательской сессии (auth.sid); Срок действия пользовательской сессии истек; Переданный идентификатор не соответствует формату
        },
        {
          "errorCode": 401003,
          "errorCodeId":urn:error:request-parameter:apikey:required:access-denied   // Не указан ключ интегратора (ofd_api_key)
        },
        {
          "errorCode": 401003,
          "errorCodeId": urn:error:request-parameter:apikey:unknown:access-denied   // Значение ключа интегратора не соответствует формату
        },
      "403 Forbidden":
        {
          "errorCode": 403000,
          "errorCodeId": urn:error:access:forbidden   // Нет доступа к запрошенным данным
        },
        {
          "errorCode": 403000,
          "errorCodeId":  urn:error:access-to:cashboxdocuments:forbidden    // Не предоставлен доступ к кассе с переданным РНМ или указан период, на который не предоставлен доступ
        },
        {
          "errorCode": 403000,
          "errorCodeId":  urn:error:access-to:organizationdocuments:forbidden   // Нет доступа к организации или указан период, на который не предоставлен доступ
        },
        {
          "errorCode": 403002,
          "errorCodeId":urn:error:access-to:cashbox:forbidden   // Не предоставлен доступ к кассе с переданным РНМ
        },
        {
          "errorCode": 403003
          "errorCodeId": urn:error:access-to:organization:forbidden   // Нет доступа к организации
        },
      "404 Not Found":
        {
          "errorCode": 404000,
          "errorCodeId": urn:error:organization:not-found   // Организация не найдена
        },
        {
          "errorCode": 404001,
          "errorCodeId": urn:error:documents:document:not-found   // ФН с переданным номером не был установлен в кассу с переданным РНМ или документ не найден
        }
    }
