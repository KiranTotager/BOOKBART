package com.kiran.bookbart;


import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.redis.core.RedisTemplate;

@SpringBootTest
public class RedisTest {
    @Autowired
    RedisTemplate redisTemplate;
    @Test
    void testRedis(){
        redisTemplate.opsForValue().set("name","kiran");
        Object name=redisTemplate.opsForValue().get("name");
        int a=1;
    }

}
