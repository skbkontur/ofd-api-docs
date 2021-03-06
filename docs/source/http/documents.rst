documents
=========

Метод возвращает все фискальные документы, полученные Контур.ОФД от кассы, на заданную дату.


**GET <endpoint>/v2/organizations/<organizationId>/cashboxes/<kktRegId>/documents?date=<date>&types=<documentsType>**

В запросе должны быть переданы следующие параметры:

- `organizationId`: обязательный, уникальный идентификатор организации, документы которой необходимо получить
- `kktRegId`: обязательный, РН ККТ кассы, документы которой необходимо получить
- `date`: обязательный, дата формирования фискальных документов, за которую необходимо получить документы
- `types`: необязательный, типы фискальных документов, которые нужно получить

Допустимые форматы для параметра `date`: гггг-мм-дд, гггг.мм.дд, дд-мм-гггг, дд.мм.гггг.

Типы фискальных документов для параметра `types`:


* `fiscalReport` - отчет о регистрации,
* `fiscalReportCorrection` - отчет об изменении параметров регистрации,
* `currentStateReport` - отчет о текущем состоянии расчетов,
* `openShift` - отчет об открытии смены,
* `closeShift` - отчет о закрытии смены,
* `receipt` - чеки,
* `bso`- бсо,
* `receiptCorrection` - чеки коррекции,
* `bsoCorrection` - бсо коррекции,
* `closeArchive` - отчет о закрытии фискального накопителя.

Есть возможность указывать несколько типов фискальных документов в одном запросе через запятую. 
Если этот параметр не указывать, то по умолчанию в ответе будут все типы фискальных документов.

Пример запроса:

::

  GET T v2/organizations/c2e3a34c-823f-4b1e-a9g1-d94fa40c22a6/cashboxes/0000000003065868/documents?date=27.08.2018types=fiscalReport,fiscalReportCorrection,currentStateReport,openShift,closeShift,receipt,receiptCorrection,closeArchive HTTP/1.1
  Host: ofd-project.kontur.ru:11002
  Cache-Control: no-cache
  X-Kontur-Ofd-ApiKey: 031c1890-9hhe-435e-5h59-43091hhcd71d
  Authorization: auth.sid 77F90D0CF33SEF67SWRG87B9BBA7139F0CD76GRTY00931F2E1F0D

Для получения списка организаций и касс, к которым у пользователя есть доступ, необходимо использовать методы :doc:`organizations` и :doc:`cashboxes`.


В теле ответа возвращается список фискальных документов от касс, к которым у интегратора есть доступ. Список возвращается в виде массива JSON-объектов следующей структуры:

::

  [
    {
      Тип ФД:
        {
          Данные ФД
        }
    },
    {
      Тип ФД:
        {
          Данные ФД
        }
    }
  ]


Пример ответа:

::

  [
    {
        "openShift": {
            "code": 2,
            "user": "",
            "userInn": "6699009482",
            "operator": "Герман Илья",
            "retailPlaceAddress": "",
            "dateTime": "2018-08-27T10:00:00",
            "shiftNumber": 367,
            "kktRegId": "0000000003065868    ",
            "fiscalDriveNumber": "99990788607     ",
            "fiscalDocumentNumber": 39089,
            "fiscalSign": 2034496394,
            "id": "00000000-0000-0000-0000-000000000000"
        }
    },
    {
        "receipt": {
            "receiptCode": 3,
            "user": "ООО Золотой пятачок",
            "userInn": "6699009482",
            "requestNumber": 1,
            "dateTime": "2018-08-27T10:13:51",
            "shiftNumber": 367,
            "operationType": 1,
            "taxationType": 1,
            "operator": "Герман Илья",
            "kktRegId": "0000000003065868    ",
            "fiscalDriveNumber": "99990788607     ",
            "retailPlaceAddress": "г. Екатеринбург. ул. Малопрудная 5",
            "items": [
                {
                    "name": "Ассорти овощное помидоры,огурцы ст/б \"Золотая Долина\" 720 гр",
                    "price": 5668,
                    "quantity": 2,
                    "sum": 11336
                }
            ],
            "nds18": 1234,
            "totalSum": 11336,
            "cashTotalSum": 11336,
            "ecashTotalSum": 0,
            "fiscalDocumentNumber": 39090,
            "fiscalSign": 3635260533,
            "id": "00000000-0000-0000-0000-000000000000"
        }
    }
  ]


Набор полей для каждого типа фискальных документов приведен в разделе :doc:`../Structures`.

Если на указанную дату нет документов, то в ответе будет пустой массив.

Для получения реквизитов фискального документа по его номеру используйте метод :doc:`document` и :doc:`documentId`.
