Аутентификация
==============

Для доступа к API необходима аутентификация в домене .kontur.ru. Получив сессию по алгоритму, описанному ниже, необходимо во всех запросах к API передавать куку (cookies) `auth.sid` со значением полученной сессии.

Пример:

::

  auth.sid=77F90D0CF33SEF67SWRG87B9BBA7139F0CD76GRTY00931F2E1F0D; path=/; domain=kontur.ru;


.. toctree::
   :name: AuthenticationMethods
   :maxdepth: 1
   :caption: Доступные способы аутентификации

   Аутентификация с использованием сертификата <AuthenticationCertificate>
   Аутентификация с использованием логина и пароля <AuthenticationPassword>
