documents/by-period
=====================

Метод возвращает все фискальные документы, полученные Контур.ОФД от кассы в заданном периоде времени. За один запрос можно получить не более 1000 документов. 
Для получения полного списка документов за период с постраничной выдачей нужно использовать параметры и структуру метода, описанные ниже.

**GET <endpoint>/v2/organizations/<organizationId>/cashboxes/<kktRegId>/documents/by-period?dateFrom=<dateFrom>&dateTo=<dateTo>&types=<documentsType>&offset=<currentOffset>&limit=<limit>**

В запросе должны быть переданы следующие параметры:

- `organizationId`: string, обязательный, уникальный идентификатор организации, документы которой необходимо получить
- `kktRegId`: string, обязательный, РН ККТ кассы, документы которой необходимо получить
- `dateFrom`: string, обязательный, дата, начиная с которой необходимо получить документы.
- `dateTo`: string, обязательный, дата, по которую (включительно) необходимо получить документы.
- `types`: string, необязательный, типы фискальных документов, которые нужно получить
- `currentOffset`: string, необязательный, указатель на получение следующей страницы документов в периоде. В качестве указателя выступает последний документ на предыдущей странице. Этот документ не будет присутствовать на новой странице.
- `limit`: number, необязательный, количество возвращаемых документов в ответе на один запрос, т.е. на одной странице.

Допустимые форматы для параметра `dateFrom` и `dateTo`: yyyy-MM-ddTHH:mm:ss.

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

Информация про `limit`:

* Значение limit по умолчанию – 1000.
* Max значение limit, которое можно указать: 1000.
* Min значение limit, которое можно указать: 1.

Пример запроса:

::

  GET v2/organizations/c2e3a34c-823f-4b1e-a9g1-d94fa40c22a6/cashboxes/0000000003065868/documents/by-period?dateFrom=2019-03-25T00:00:00&dateTo=2019-03-25T23:59:59&types=receipt&offset=T2MbygVny1CAWaPZI1NarQ%3D%3D&limit=1000
  Host: ofd-project.kontur.ru:11002
  Cache-Control: no-cache
  X-Kontur-Ofd-ApiKey: 031c1890-9hhe-435e-5h59-43091hhcd71d
  Authorization: auth.sid 77F90D0CF33SEF67SWRG87B9BBA7139F0CD76GRTY00931F2E1F0D
  
Для получения списка организаций и касс, к которым у пользователя есть доступ, необходимо использовать методы :doc:`organizations` и :doc:`cashboxes`.

В теле ответа возвращается список фискальных документов от касс, к которым у интегратора есть доступ. Список возвращается в виде массива JSON-объектов следующей структуры:

::

  {
   "documents":[                     //список документов
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
   },
  …
  ],
 "paging": {
            "nextOffset":""         //string, значение offset для получения данных на следующей странице
           }
  } 

**Как определить, все ли документы получены**

Для получения первой страницы документов offset можно не указывать. Документы берем с начала заданного периода.
Для следующих страниц в этом периоде нужно указать в offset значение nextOffset, полученное в предыдущем ответе на запрос.
Необходимо настроить цикл запросов с параметром offset, который будет работать до тех пор, пока значение offset в запросе не будет
равно значению nextOffset в ответе. В ответе будет пустой массив документов. Это значит, что все документы за период на текущий
момент получены или, возможно, еще новые документы не пришли с кассы.

::

  {
   "documents":[],
   "paging": {
            "nextOffset":"T1NbygNby1CAWaPZI1NarQ%3D%3D"
     }
   }

Это справедливо и для offset=null. Если в запросе не указали offset и документов нет в периоде, то получим пустой список документов и "nextOffset":null.

::

  {
  "documents":[ ],
  "paging":{ }
  }


**Особенности**

* limit – максимальное возможное количество документов, которое вернется в ответе на один запрос. Допустим, вы хотите получать не все типы документов, а сделать фильтр на определенные типы. В этом случае есть особенности архитектуры нашей системы. Количество документов в ответе может быть в некоторых случаях меньше, чем указан limit в запросе. Это верно даже, если количество документов равно или больше limit.
* Если указать limit положительный и больше 1000, то вернем в ответе количество документов равное значению по умолчанию 1000.
* Документы в периоде сгенерированы в рамках определенных ФН-ов. Если offset **не** принадлежит указанному периоду **и** offset относится к документу, который был сгенерирован в рамках этих ФН-ов:
  
  Если offset раньше указанного периода, то получите список документов с начала периода.
  
  Если offset позже указанного периода, то в ответе будет пустой массив документов:

::

  {
   "documents":[],
   "paging": {
            "nextOffset":""           //string, offset того документа, который был указан в запросе
     }
   }
   
Пример ответа:

::

  {
   "documents":[
    {
       "openShift": {
       "code": 2,
       "user": "",
       "userInn": "6699009482",
       "operator": "Герман Илья",
       "retailPlaceAddress": "",
       "dateTime": "2018-08-27T10:00:00",
       "shiftNumber": 367,
       "kktRegId": "0000000003065868 ",
       "fiscalDriveNumber": "99990788607 ",
       "fiscalDocumentNumber": 39089,
       "fiscalSign": 2034496394,
       "id": "00000000-0000-0000-0000-000000000000
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
      "kktRegId": "0000000003065868 ",
      "fiscalDriveNumber": "99990788607 ",
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
             "id": "00000000-0000-0000-0000-000000000000
            }
          }
        ],
   "paging": {
             "nextOffset":"T1MbygVby1CAWaPZI1NarQ%3D%3D"
    }
   }
   
Набор полей для каждого типа фискальных документов приведен в разделе :doc:`../Structures`.

Для получения реквизитов фискального документа по его номеру используйте метод :doc:`document` и :doc:`documentId`