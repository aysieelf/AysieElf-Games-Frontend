import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError(''); // Clear error when user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          username: formData.username,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || 'Login failed');
      }

      // Store the token
      localStorage.setItem('token', data.access_token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 m-4 mb-52 bg-cozy-sky-blue rounded-lg backdrop-blur-sm border-4 border-cozy-active">
        <h1 className="text-4xl font-display text-cozy-leaf-mid mb-8 text-center">LOGIN</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="username"
              className="w-full px-4 py-2 bg-white bg-opacity-80 rounded-lg border border-gray-300 focus:gray-100 focus:ring-2 focus:ring-cozy-cream outline-none transition-colors duration-200"
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="password"
              className="w-full px-4 py-2 bg-white bg-opacity-80 rounded-lg border border-gray-300 focus:gray-100 focus:ring-2 focus:ring-cozy-cream outline-none transition-colors duration-200 mb-8"
            />
          </div>

          {error && (
            <div className="p-3 bg-cozy-pastel-rose border rounded-lg border-cozy-dusty-rose text-gray-600">
              {error}
            </div>
          )}

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 px-6 py-2 bg-cozy-text-mid-brown text-gray-200 rounded-lg hover:bg-cozy-text-light hover:text-gray-700 transition-colors duration-200"
            >
              {isLoading ? 'LOADING...' : 'LOGIN'}
            </button>

            <button
              type="button"
              onClick={() => navigate('/register')}
              className="flex-1 px-6 py-2 bg-cozy-text-mid-brown text-gray-200 rounded-lg hover:bg-cozy-text-light hover:text-gray-700 transition-colors duration-200"
            >
              REGISTER
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;