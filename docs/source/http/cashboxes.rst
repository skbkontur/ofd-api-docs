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
      "kpp": "",                  // КПП, указанный при подключении кассы в ЛК, либо КПП организации (в остальных случаях)
      "fiscalDrive": {
        "fiscalDriveNumber": ""   // заводской номер фискального накопителя (ФН)
      },
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
      "kpp": "669901001",
      "fiscalDrive": {
        "fiscalDriveNumber": "1234567891234567"
      },
      "salesPointName": "Четвертая точка продаж",       
      "permissionFrom": "2018-12-12T00:00:00",
      "permissionTo": "2018-12-14T14:14:41"
    }
  ]


Для получения реквизитов кассы по её регистрационному номеру, используйте метод :doc:`cashbox`
