import {
  Truck,
  Navigation,
  Warehouse,
  Wrench,
  Users,
  Clock,
  Package,
  Route,
  BarChart3,
  CheckCircle,
} from 'lucide-react';

export const iconMap = {
  Truck,
  Navigation,
  Warehouse,
  Wrench,
  Users,
  Clock,
  Package,
  Route,
  BarChart3,
  CheckCircle,
};

export function ServiceIcon({ name, ...props }) {
  const Icon = iconMap[name];
  return Icon ? <Icon {...props} /> : null;
}
