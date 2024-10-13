package com.trustacean.restful_web_services.user;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

import org.springframework.stereotype.Component;

@Component
public class UserService {
    private static List<User> users = new ArrayList<User>();
    private static int usersCount = 0;

    static {
        users.add(new User(++usersCount, "Adam", LocalDate.now()));
        users.add(new User(++usersCount, "Eve", LocalDate.now()));
        users.add(new User(++usersCount, "Jack", LocalDate.now()));
        users.add(new User(++usersCount, "Trustacean", LocalDate.of(2004, 3, 13)));
    }

    public List<User> findAll() {
        return users;
    }

    public User findOne(int id) {
        Predicate<? super User> predicate = user -> user.getId().equals(id);
        return users.stream().filter(predicate).findFirst().orElse(null);
    }

    public User save(User user) {
        user.setId(++usersCount);
        users.add(user);
        return user;
    }

    public void deleteById(int id) {
        Predicate<? super User> predicate = user -> user.getId().equals(id);
        users.removeIf(predicate);
    }
}
