package br.ufc.crateus.npds.events.repository;

import br.ufc.crateus.npds.events.models.Event;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


import java.util.List;

@Repository
public interface EventRepository extends CrudRepository<Event, Integer> {

    List<Event> findAll(Pageable pageable);

    List<Event> findByNameContainingIgnoreCaseOrDescriptionContainingIgnoreCaseOrLocalizationContainingIgnoreCaseOrOrganizerContainingIgnoreCase(String name, String description, String localization, String organizer, Pageable pageable);
}
