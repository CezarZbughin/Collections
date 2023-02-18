package com.czmp.collections.repository;

import com.czmp.collections.model.EndUser;
import com.czmp.collections.model.Notification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface NotificationRepository extends JpaRepository<Notification, Long> {
    List<Notification> findByOwnerAndOrderByDateDesc();
    int countByOwnerAndDateAfter(EndUser owner, Date date);
}
