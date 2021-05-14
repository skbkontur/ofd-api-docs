Аутентификация с использованием сертификата
-------------------------------------------

1. Используйте метод :doc:`Auth/authenticate-by-cert` в API авторизации для получения токена (EncryptedKey).
2. Расшифруйте EncryptedKey с помощью закрытого ключа, соответствующего сертификату, использованного на шаге 1. Для работы с сертификатом и расшифровки ключа могут быть использованы общедоступные классы и библиотеки, например, `EnvelopedCms <https://docs.microsoft.com/ru-ru/dotnet/api/system.security.cryptography.pkcs.envelopedcms.decrypt?redirectedfrom=MSDN&view=netframework-4.7.2#System_Security_Cryptography_Pkcs_EnvelopedCms_Decrypt>`_, `X509Certificate2 <https://docs.microsoft.com/ru-ru/dotnet/api/system.security.cryptography.x509certificates.x509certificate2?view=netframework-4.7.2>`_, `BouncyCastle <http://www.bouncycastle.org/csharp/>`_, `OpenSSL <https://www.openssl.org/docs/>`_ и т.д.
3. Используйте метод :doc:`Auth/approve-cert` для получения идентификатора сессии
4. Полученный идентификатор используйте в качестве значения auth.sid

Для выполнения запросов, помимо идентификатора сессии вам необходимо передавать ключ интегратора. Подробнее в разделе :doc:`../Authorization`.