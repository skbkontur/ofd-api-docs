cashboxes
=========

Метод возвращает все кассы организации, к которым у пользователя есть доступ.

**GET <endpoint>/v2/organizations/<organizationId>/cashboxes**


Пример запроса:

::

  GET /v2/organizations/c2e3a34c-823f-4b1e-a9g1-d94fa40c22a6/cashboxes HTTP/1.1
  Host: ofd-project.kontur.ru:11002
  Cache-Control: no-cache
  ofd_api_key=031c1120-9hhe-435e-5h08-43091hhcd71d;auth.sid=FEC4454C200EC54BJ7GE4PO0011121C4E7E79C795HHTG395JD16C002EG125CFA;


В теле ответа возвращаются кассы организации с их реквизитами в виде массива JSON-объектов следующей структуры:

::

  [
    {
      "regNumber": "",            // регистрационный номер ККТ (РНМ)
      "serialNumber": "",         // заводской номер ККТ
      "address": "",              // адрес размещения ККТ (адрес осуществления расчетов между пользователем и покупателем)
      "name": "",                 // наименование ККТ
      "modelName": "",            // модель ККТ
      "kpp": "",                  // КПП, указанный при подключении кассы в ЛК, либо КПП организации (в остальных случаях)
      "fiscalDrive":              // текущий фискальный накопитель
        {
          "fiscalDriverNumber": "",         // заводской номер фискального накопителя
          "earliestDocumentTimestamp": ""   // дата первого документа, который хранится у нас, для этого фискального накопителя
        },
      "fiscalDrives":             // список всех фискальных накопителей для кассы, в том числе и текущий
        [
          {
            "fiscalDriverNumber": "",
            "earliestDocumentTimestamp": ""
          },
          {
            "fiscalDriverNumber": "",
            "earliestDocumentTimestamp": ""
          },
          ...
        ],
      "salesPointName": "",       // название текущей точки продаж
      "permissionFrom": "",       // дата, с которой интегратор может получать документы
      "permissionTo": ""          // дата, по которую интегратор может получать документы
    }
  ]


Пример ответа:

::

  [
    {
      "regNumber": "0000800000000005",
      "serialNumber": "00106700332501",
      "address": "г. Екатеринбург. ул. Малопрудная 5",
      "name": "Касса 1",
      "modelName": "АТОЛ 30Ф",
      "kpp": "669901001",
      "fiscalDrive":
        {
          "fiscalDriverNumber": "9492452823423233",
          "earliestDocumentTimestamp": "2019-10-10T00:00:00"
        },
      "fiscalDrives":
        [
          {
            "fiscalDriverNumber": "4393456832322943",
            "earliestDocumentTimestamp": "2017-11-12T00:00:00"
          },
          {
            "fiscalDriverNumber": "9492452823423233",
            "earliestDocumentTimestamp": "2019-10-10T00:00:00"
          }
        ],
      "salesPointName": "Четвертая точка продаж",
      "permissionFrom": "2018-12-12T00:00:00",
      "permissionTo": "2018-12-14T14:14:41"
    }
  ]


Для получения реквизитов кассы по её регистрационному номеру, используйте метод :doc:`cashbox`
