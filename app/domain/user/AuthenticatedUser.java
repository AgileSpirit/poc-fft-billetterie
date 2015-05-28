package domain.user;

public class AuthenticatedUser extends User {

    @Override
    public boolean isAuthenticated() {
        return true;
    }

}
