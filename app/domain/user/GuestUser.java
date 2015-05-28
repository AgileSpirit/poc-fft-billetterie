package domain.user;

public class GuestUser extends User {

    @Override
    public boolean isAuthenticated() {
        return false;
    }

}
