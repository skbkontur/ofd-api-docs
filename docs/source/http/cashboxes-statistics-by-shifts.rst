cashboxes/statistics/by-shifts
==============================

Метод возвращает по кассе и периоду информацию в разрезе смен. В смене хранится массив агрегированных данных.

**GET <endpoint>/v2/organizations/<organizationId>/cashboxes/<kktRegId>/statistics/cash-receipt/by-shifts?from=<dateFrom>&to=<dateTo>**

В запросе должны быть переданы следующие параметры:

- `organizationId`: обязательный, уникальный идентификатор организации, информацию о которой необходимо получить
- `kktRegId`: обязательный, РНМ кассы, документы которой необходимо получить
- `dateFrom`: обязательный, дата формирования фискальных документов, начиная с которой необходимо получить документы
- `dateTo`: обязательный, дата формирования фискальных документов, по которую (включительно) необходимо получить документы

Допустимые форматы для параметров `dateFrom` и `dateTo`: гггг-мм-дд, гггг.мм.дд, дд-мм-гггг, дд.мм.гггг.

Пример запроса:

::

  GET v2/organizations/c2e3a34c-823f-4b1e-a9g1-d94fa40c22a6/cashboxes/0000000003065868/statistics/cash-receipt/by-shifts?from=2019-01-01&to=2019-03-01 HTTP/1.1
  Host: ofd-project.kontur.ru:11002
  Cache-Control: no-cache
  ofd_api_key=031c1890-9hhe-435e-5h59-43091hhcd71d;auth.sid=FEC4B58C200EC54BJ7GE4PO0032821C4E7E79C795HHAS395JD16C002EC125CFA;


Для получения списка организаций и касс, к которым у пользователя есть доступ, необходимо использовать методы :doc:`organizations` и :doc:`cashboxes`.

В теле ответа возвращается информация в разрезе смен. Список возвращается в виде массива JSON-объектов следующей структуры:

::

  {
    «shifts»:
      [
        {
          Информация по смене
        },
        {
          Информация по смене
        }
      ]
  }


Пример ответа в разрезе двух смен:
      

::

  {
    "shifts": [
    {
      "shiftNumber": 103,                      // Номер первой смены
      "shiftOpen": "2019-11-19T10:00:00",      // Дата и время открытия
      "shiftClose": "2019-11-19T16:00:01",     // Дата и время закрытия (только если смена закрыта)
      "buy": {                                 // Покупка. Информация по чекам с признаком Расход
        "cashlessTotal": 245754,               // Сумма безналичными в копейках
        "cashTotal": 360542,                   // Сумма наличными в копейках
        "total": 606296,                       // Общая сумма в копейках
        "totalWithNds0": 0,                    // Сумма НДС 0% в копейках
        "totalWithNdsFree": 0,                 // Сумма без НДС в копейках
        "count": 14,                           // Количество чеков
        "nds": {
          "rate10": 0,                         // Сумма НДС 10% в копейках
          "calculatedWithRate10": 0,           // Сумма НДС 10/110 в копейках
          "rate18": 0,                         // Сумма НДС 18% в копейках
          "calculatedWithRate18": 0,           // Сумма НДС 18/118 в копейках
          "rate20": 101051,                    // Сумма НДС 20% в копейках
          "calculatedWithRate20": 0            // Сумма НДС 20/120 в копейках
          }
      },
      "returnBuy": {                           // Возврат покупки. Информация по чекам с признаком Возврат расхода
        "cashlessTotal": 37202,
        "cashTotal": 132320,
        "total": 169522,
        "totalWithNds0": 0,
        "totalWithNdsFree": 0,
        "count": 4,
        "nds": {
          "rate10": 0,
          "calculatedWithRate10": 0,
          "rate18": 0,
          "calculatedWithRate18": 0,
          "rate20": 28253,
          "calculatedWithRate20": 0
          }
      },
      "sell": {                                // Продажа. Информация по чекам с признаком Приход
        "cashlessTotal": 2862884,
        "cashTotal": 3316499,
        "total": 6179383,
        "totalWithNds0": 0,
        "totalWithNdsFree": 0,
        "count": 166,
        "nds": {
          "rate10": 0,
          "calculatedWithRate10": 0,
          "rate18": 0,
          "calculatedWithRate18": 0,
          "rate20": 1029913,
          "calculatedWithRate20": 0
          }
      },
      "returnSell": {                         // Возврат продажи. Информация по чекам с признаком Возврат прихода
        "cashlessTotal": 414383,
        "cashTotal": 171692,
        "total": 586075,
        "totalWithNds0": 0,
        "totalWithNdsFree": 0,
        "count": 16,
        "nds": {
          "rate10": 0,
          "calculatedWithRate10": 0,
          "rate18": 0,
          "calculatedWithRate18": 0,
          "rate20": 97681,
          "calculatedWithRate20": 0
          }
      }
    },
    {
      "shiftNumber": 104,                    // Номер второй смены
      "shiftOpen": "2019-11-19T16:01:00",
      "shiftClose": "2019-11-19T22:00:01",
      "buy": {
        "cashlessTotal": 327200,
        "cashTotal": 402772,
        "total": 729972,
        "totalWithNds0": 0,
        "totalWithNdsFree": 0,
        "count": 18,
        "nds": {
          "rate10": 0,
          "calculatedWithRate10": 0,
          "rate18": 0,
          "calculatedWithRate18": 0,
          "rate20": 121665,
          "calculatedWithRate20": 0
          }
      },
      "returnBuy": {
        "cashlessTotal": 129720,
        "cashTotal": 92343,
        "total": 222063,
        "totalWithNds0": 0,
        "totalWithNdsFree": 0,
        "count": 4,
        "nds": {
          "rate10": 0,
          "calculatedWithRate10": 0,
          "rate18": 0,
          "calculatedWithRate18": 0,
          "rate20": 37010,
          "calculatedWithRate20": 0
          }
      },
      "sell": {
        "cashlessTotal": 3363914,
        "cashTotal": 3010182,
        "total": 6374096,
        "totalWithNds0": 0,
        "totalWithNdsFree": 0,
        "count": 160,
        "nds": {
          "rate10": 0,
          "calculatedWithRate10": 0,
          "rate18": 0,
          "calculatedWithRate18": 0,
          "rate20": 1062367,
          "calculatedWithRate20": 0
          }
      },
      "returnSell": {
        "cashlessTotal": 303281,
        "cashTotal": 357152,
        "total": 660433,
        "totalWithNds0": 0,
        "totalWithNdsFree": 0,
        "count": 17,
        "nds": {
          "rate10": 0,
          "calculatedWithRate10": 0,
          "rate18": 0,
          "calculatedWithRate18": 0,
          "rate20": 110074,
          "calculatedWithRate20": 0
          }
        }
      }
    ]
  }

Для получения по кассе и периоду информации в разрезе дней, используйте метод :doc:`cashboxes-statistics-by-days`
