package liviabraz.com.passIn.domain.attendee.exceptions;

public class AttendeeAlreadyExistException extends RuntimeException {

    public AttendeeAlreadyExistException(String message){
        super(message);
    }
}
