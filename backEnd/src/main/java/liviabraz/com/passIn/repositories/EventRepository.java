package liviabraz.com.passIn.repositories;

import liviabraz.com.passIn.domain.event.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event, String> {
}
