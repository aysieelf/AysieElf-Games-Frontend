import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../config/api';
import { Eye, EyeOff } from 'lucide-react';


const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
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
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_URL}/api/v1/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
        credentials: 'include',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Registration failed');
      }

      const data = await response.json();
      localStorage.setItem('token', data.access_token);
      navigate('/dashboard');
    } catch (err) {
      console.error('Registration error:', err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 m-4 mb-52 bg-cozy-sky-blue rounded-lg backdrop-blur-sm border-4 border-cozy-active">
        <h1 className="text-4xl font-display text-cozy-leaf-mid mb-8 text-center">REGISTER</h1>

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
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email"
                className="w-full px-4 py-2 bg-white bg-opacity-80 rounded-lg border border-gray-300 focus:gray-100 focus:ring-2 focus:ring-cozy-cream outline-none transition-colors duration-200"
            />
          </div>
          <div className="relative">
            <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="password"
                className="w-full px-4 py-2 bg-white bg-opacity-80 rounded-lg border border-gray-300 focus:gray-100 focus:ring-2 focus:ring-cozy-cream outline-none transition-colors duration-200 mb-8"
            />
            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-cozy-text-mid-brown hover:text-cozy-text-light transition-colors duration-200"
            >
              {showPassword ?
                  <EyeOff size={20}/> :
                  <Eye size={20}/>
              }
            </button>
          </div>

          {error && (
              <div className="p-3 bg-cozy-pastel-rose border rounded-lg border-cozy-dusty-rose text-gray-600">
                {error}
              </div>
          )}

          <div className="flex gap-4">
            <button
                type="button"
                onClick={() => navigate('/login')}
                className="flex-1 px-6 py-2 bg-transparent border-2 border-cozy-text-mid-brown text-cozy-text-mid-brown rounded-lg hover:bg-cozy-text-mid-brown hover:text-gray-200 transition-colors duration-200"
            >
              LOGIN
            </button>

            <button
                type="submit"
                disabled={isLoading}
                className="flex-1 px-6 py-2 bg-cozy-text-mid-brown text-gray-200 rounded-lg hover:bg-cozy-text-light hover:text-gray-700 transition-colors duration-200"
            >
              {isLoading ? 'LOADING...' : 'REGISTER'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;