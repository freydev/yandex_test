# -*- coding: utf-8 -*-
import time
def howlong(f):
   def tmp(*args, **kwargs):
       t = time.time()
       res = f(*args, **kwargs)
       print "time: %f" % (time.time()-t)
       return res
   return tmp

@howlong
def login_validate_primary(login):
    import re
    proc = re.compile(r'^[a-z][a-z0-9.-]*[a-z0-9]$', re.IGNORECASE)
    return login and \
           len(login) <= 20 and \
           proc.match(login) and True or False


@howlong
def login_validate_second(login):
    if not login or len(login) > 20: # проверяем длину
        return False
        
    try: # проверяем наличие русских букв
        login.encode('ascii')
    except UnicodeEncodeError:
        return False
        
    # проверяем первый и последний символ        
    if not login[0].isalpha() or \
       not login[-1].isalpha() and not login[-1].isdigit():
           return False
           
    # удаляем запятые и минуса, и проверяем на алфавитно-циферность
    if not login.replace('.','').replace('-','').isalnum():
        return False           
    return True
     

login = 'login.andrey-123'

print '%s - validate:%s' %(login, login_validate_second(login))
print '%s - validate:%s' %(login, login_validate_primary(login))